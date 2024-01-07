import { OrderHistoryCard } from '@/app/components';
import prisma from '@/app/utils/prisma';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession();
  const userEmail = session?.user?.email;
  const orders = await prisma.reservation.findMany({
    where: {
      user: {
        email: userEmail as string,
      },
      paymentStatus: 'Completed',
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      car: true,
    },
  });

  return (
    <div className="w-full">
      <h1 className="dashboard-heading">Historique des commandes</h1>
      <div className="account-grid w-full">
        {orders.map((order, index) => (
          <OrderHistoryCard
            title={`${order.car?.brand} ${order.car?.model}`}
            checkoutSessionId={order.checkoutSessionId as string}
            image={order.car?.wallpaper as string}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default page;
