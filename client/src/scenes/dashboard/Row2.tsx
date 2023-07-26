import DashboardBox from "@/components/DashboardBox";

type Props = {};

function Row2(props: Props) {
  return (
    <>
      <DashboardBox gridArea="d" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="e" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="f" bgcolor="#fff"></DashboardBox>
    </>
  );
}

export default Row2;
