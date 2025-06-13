"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card } from "@radix-ui/themes";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

function IssueChart({ open, inProgress, closed }: Props) {
  const data = [
    { label: "Open", value: open, color: "var(--red-a7)" }, 
    { label: "In Progress", value: inProgress, color: "var(--blue-a7)" }, 
    { label: "Closed", value: closed, color: "var(--green-a7)" }, 
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default IssueChart;
