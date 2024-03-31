"use client";
import { CardWork } from "@/components/ui";
import { ProjectData } from "@/models";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

const GridWorks = ({ data, meta }: any) => {
  const [pageSelect, setPageSelect] = useState(1);

  useEffect(() => {
    console.log(pageSelect);
  }, [pageSelect]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 pb-6">
        {data.map((project: ProjectData) => (
          <CardWork key={project.id} project={project.attributes} />
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Pagination
          total={meta.pagination.pageCount}
          initialPage={meta.pagination.page}
          size="md"
          showControls
          isCompact
          onChange={(pageSelect: number) => setPageSelect(pageSelect)}
        />
      </div>
    </>
  );
};

export default GridWorks;
