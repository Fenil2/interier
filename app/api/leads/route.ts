import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* ── GET /api/leads — fetch all leads ── */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const leads = await prisma.lead.findMany({
      where: {
        ...(status && status !== "ALL" ? { status: status as never } : {}),
        ...(search
          ? {
              OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName:  { contains: search, mode: "insensitive" } },
                { email:     { contains: search, mode: "insensitive" } },
                { phone:     { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ leads });
  } catch (err) {
    console.error("[GET /api/leads]", err);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

/* ── POST /api/leads — create a lead from contact form ── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: { firstName, lastName, email, phone, service: service || "Not specified", message },
    });

    return NextResponse.json({ lead }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/leads]", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
