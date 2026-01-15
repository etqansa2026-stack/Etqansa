import { getBannerById } from "@/app/server/banners/services";
import EditBannerForm from "@/components/banners/EditBannerForm";
import { editBannerAction } from "../(actions)/editBannerAction";
import { notFound } from "next/navigation";

async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const result = await getBannerById(id);

  if (!result || !result.data) {
    notFound();
  }

  const banner = result.data;

  return <EditBannerForm banner={banner} action={editBannerAction} />;
}

export default Page;
