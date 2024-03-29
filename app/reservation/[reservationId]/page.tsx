import { fetchBookingInfo } from '@/app/actions/setsBookingInfo';
import Reservation from '@/app/components/sections/reservation/Reservation';
import prisma from '@/app/utils/prisma';
import { redirect } from 'next/navigation';

interface IReservationProps {
  params: {
    reservationId: string;
  };
}

const ReservationPage: React.FC<IReservationProps> = async ({ params }) => {
  // redirect if reservationId is not valid
  if (params.reservationId) {
    const reservation = await prisma.reservation.findUnique({
      where: { id: params.reservationId },
    });
    if (!reservation) redirect('/reservation');
  }

  const response = await fetchBookingInfo(params.reservationId);
  const bookingInfo = response?.data;

  const collection = await prisma.vehicule.findMany();

  return (
    <section>
      <Reservation bookingInfo={bookingInfo} collection={collection} />
    </section>
  );
};
export default ReservationPage;
