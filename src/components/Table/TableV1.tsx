import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface DataType {
  key: string;
  artist: string;
  title: number;
  genre: string;
  popularity: string;
}

interface TableV1Props {
  data: DataType[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Artist",
    dataIndex: "artist",
    key: "artist",
  },
  {
    title: "Song",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
    render: (genre: string) => capitalizeFirstLetter(genre),
  },
  {
    title: "Popularity",
    dataIndex: "popularity",
    key: "popularity",
  },
];

const TableV1: React.FC<TableV1Props> = (props) => {
  const { data } = props;

  return <Table columns={columns} dataSource={data} />;
};

export default TableV1;
