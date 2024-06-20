import { auth } from "@/auth";
import EditableBrick from "./_components/EditableBrick";
import { getBrick } from "@/app/lib/actions/brickActions";


export default async function page({ params }) {
  const session = await auth();
  const token = session.user.accessToken;
  const brick = await getBrick(token, params.brickId);

  return (
    <EditableBrick
      brick={brick}
      token={token}
    />
  );
}
