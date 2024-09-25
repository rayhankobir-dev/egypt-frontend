/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axiosInstance from "@/api";
import Spinner from "@/components/spinner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RichTextEditor from "@/components/richtext-editor";

function Dashboard() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState<any>(null);

  const handleContentSave = async () => {
    try {
      const { data } = await axiosInstance.post("/home", {
        history: value,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHome = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/home");
      setHome(data.data.home);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-5">
          <RichTextEditor
            initialHtmlString={home?.history}
            onChange={(value) => setValue(value)}
          />

          <Button onClick={handleContentSave}>Save</Button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
