import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (session) redirect('/');
  return (
    <div className="w-full min-h-screen bg-dark-gray md:bg-black flex justify-center items-center text-white">
      {children}
    </div>
  );
}
