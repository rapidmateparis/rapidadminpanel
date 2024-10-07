import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import JoinRequestTable from "@/components/consumer/JoinRequest";
import NewJoinRequestPage from "@/components/consumer/NewJoinRequest";
import Layout from "@/components/layouts/layout";



export default function Home() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Join Requests" />

        <div className="flex flex-col gap-10">
          <JoinRequestTable/>
          <h1>hgsdfgsdhfgsdhg</h1>
        </div>
      </Layout>
    </>
  );
}
