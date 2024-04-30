import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

import { Suspense } from 'react';
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import CardWrapper from './cards';
import ErrorBoundary from '../ui/errorBoundary';
import Error from './error';

export default async function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}
