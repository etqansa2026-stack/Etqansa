import EditProgramForm from "@/components/program/EditProgramForm";
import { editProgramAction } from "../(actions)/editProgramAction";
import { getProgramById } from "@/app/server/programs/services";
import { notFound } from "next/navigation";

async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const result = await getProgramById(id);

  if (!result || !result.data) {
    notFound();
  }

  const program = result.data;

  return <EditProgramForm program={program} action={editProgramAction} />;
}

export default Page;
