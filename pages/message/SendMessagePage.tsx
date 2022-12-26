import Layout from "../../components/layout/Layout";
import SendMessageForm from "../../components/form/SendMessageForm";

export default function SendMessagePage() {
  return (
    <Layout>
      <SendMessageForm
        sendMessage={(
          text: string,
          receiver: string,
          tokenInEther: string
        ) => {}}
      />
    </Layout>
  );
}
