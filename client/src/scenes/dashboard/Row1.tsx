import DashboardBox from "@/components/DashboardBox";

type Props = {};

function Row1(props: Props) {
  return (
    <>
      <DashboardBox gridArea="a" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="b" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="c" bgcolor="#fff"></DashboardBox>
    </>
  );
}

export default Row1;
