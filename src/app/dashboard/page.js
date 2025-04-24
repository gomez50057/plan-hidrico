// app/dashboard/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Dashboard from '@/components/forms_nivelacion_tierra/dashboard/Dashboard';

export default function DashboardPage() {
  const token = cookies().get('access_token')?.value;
  if (!token) {
    // Si no hay token, redirige antes de renderizar
    redirect('/login');
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
