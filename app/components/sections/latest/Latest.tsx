import { CarCard } from '../..';
import prisma from '@/app/utils/prisma';

const Latest = async () => {
  const latestCars =
    (await prisma.vehicule.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    })) || [];

  return (
    <section className="max-w-wide py-20 w-full mx-auto">
      <h3 className="heading-4 mb-6">Nos derniers modèles</h3>
      <div className="grid grid-cols-3 gap-9 max-[1319px]:grid-cols-2 max-[903px]:grid-cols-1 ">
        {latestCars.map((car) => (
          <CarCard
            key={car.id}
            title={`${car.make} ${car.model}`}
            subtitle={car.shortDescription!}
            price={`${car.dailyPrice! / 100}`}
            image={car.carImage!}
            href={`/collection/${car.id}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Latest;
