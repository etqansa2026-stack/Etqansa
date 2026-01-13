"use server";
import { getmembersByTypePagAndLocale } from "@/app/server/our_team/services";
import { Locale } from "next-intl";
type MemberType = "founder" | "life_programs" | "professional_programs"

export async function getmembersByTypePagAndLocaleAction(member_type:MemberType,page:number, locale:"en"|"ar") {
  try {
     
      const result = await getmembersByTypePagAndLocale(member_type,page,locale);
      if (result.status === 200) {
        return {success:true, message: result.message, status: result.status ,data:result.data,totalCount:result.totalCount };
      }
      return {success:false, message: result.message, status: result.status };
    } catch (error) {      
      return {success:false, message: "Error In Deleting Application", status: 500 };
    }
}
