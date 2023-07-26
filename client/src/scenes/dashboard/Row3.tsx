import DashboardBox from "@/components/DashboardBox";

type Props = {};

function Row3(props: Props) {
  return (
    <>
      <DashboardBox gridArea="g" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="h" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="i" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="j" bgcolor="#fff"></DashboardBox>
    </>
  );
}

export default Row3;
