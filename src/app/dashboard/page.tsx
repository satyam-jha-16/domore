"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SkeletonLoadingPage from "@/components/SkeletonPage";
import FileList from "@/components/Dashboard/FilesList";
import DashboardLoader from "@/components/Dashboard/DashboardLoader";
export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);
  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    setLoading(true);
    const result = await convex.query(api.user.getUser, {
      email: user?.email as string,
    });
    if (!result?.length) {
      createUser({
        name: user?.given_name as string,
        email: user?.email as string,
        image: user?.picture as string,
      }).then((resp) => {
        console.log(resp);
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <MaxWidthWrapper>
        {loading ? <DashboardLoader /> : <FileList />}
      </MaxWidthWrapper>
    </div>
  );
}
