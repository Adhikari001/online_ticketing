import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading2 from "../../ui/Heading2";

const colors = {
  patientCount: { stroke: "#4f46e5", fill: "#4f46e5" },
  text: "#000",
  background: "#dce1e8",
};

function PatientCharts({ patientGraph }) {
  return (
    <div className="w-full">
      <Heading2>Patients Onboarding</Heading2>
      <ResponsiveContainer height={500} width="100%">
        <AreaChart data={patientGraph}>
          <XAxis
            dataKey="formattedDate"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
            angle={-45}
            height={50}
            textAnchor="end"
          />
          <YAxis
            tickCount={20}
            width={100}
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="patientCount"
            type="monotone"
            stroke={colors.patientCount.stroke}
            fill={colors.patientCount.fill}
            strokeWidth={2}
            name="Patient Count"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PatientCharts;
