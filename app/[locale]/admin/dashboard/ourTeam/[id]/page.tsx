import EditMemberForm from "@/components/our_team/EditMemberForm";
import { editMemberAction } from "../(actions)/editMemberAction";
import { getMemberById } from "@/app/server/our_team/services";
import { notFound } from "next/navigation";

async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const result = await getMemberById(id);

  if (!result || !result.data) {
    notFound();
  }

  const member = result.data;

  return <EditMemberForm member={member} action={editMemberAction} />;
}

export default Page;
