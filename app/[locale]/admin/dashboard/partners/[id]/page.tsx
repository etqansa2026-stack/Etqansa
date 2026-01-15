import { getPartnerById } from "@/app/server/partners/services";
import EditNewPartnerForm from "@/components/partners/editPartnerForm";
import { editpartnerAction } from "../(actions)/editPartnerAction";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const result = await getPartnerById(id);

  if (!result || !result.data) {
    notFound();
  }

  const partner = result.data;

  return <EditNewPartnerForm partners={partner} action={editpartnerAction} />;
}
