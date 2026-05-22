import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* ── PATCH /api/leads/:id — update status ── */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ lead });
  } catch (err) {
    console.error("[PATCH /api/leads/:id]", err);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}

/* ── DELETE /api/leads/:id ── */
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.lead.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/leads/:id]", err);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
