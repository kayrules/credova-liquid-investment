import { IoWalletOutline } from 'react-icons/io5';
import { PiFilePdfDuotone } from 'react-icons/pi';
import BookmarkButton from './BookmarkButton';
import { BookmarkProvider } from '../contexts/BookmarkContext';

interface Asset {
  type: string;
  weight_gram: number;
  appraised_value_rm: number;
}

interface Status {
  code: string;
  label: string;
  color: string;
}

interface Actions {
  buy_now_enabled: boolean;
  view_details_url: string;
}

interface Receivable {
  id: string;
  branch: string;
  asset: Asset;
  status: Status;
  purchase_price_rm: number;
  expected_return_rm: number;
  profit_rate_pa: number;
  tenure_days: number;
  maturity_date: string;
  actions: Actions;
}

interface ReceivablesGridProps {
  receivables: Receivable[];
}

export default function ReceivablesGrid({ receivables }: ReceivablesGridProps) {
  return (
    <BookmarkProvider>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {receivables.map((receivable) => (
          <div
            key={receivable.id}
            className="group p-5 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:border-primary-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookmarkButton receivableId={receivable.id} />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{receivable.id}</span>
              </div>
              <span
                className={`px-2.5 py-0.5 text-xs font-medium rounded ${
                  receivable.status.code === 'AVAILABLE'
                    ? 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300'
                    : receivable.status.code === 'UPCOMING'
                    ? 'text-purple-800 bg-purple-100 dark:bg-purple-900 dark:text-purple-300'
                    : 'text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-300'
                }`}
              >
                {receivable.status.label}
              </span>
            </div>

            {/* Highlighted: Asset Type & Branch */}
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700 flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {receivable.asset.type}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {receivable.branch}
                </p>
              </div>
              <div className="hidden group-hover:flex gap-2 flex-shrink-0 mt-2">
                {receivable.actions.buy_now_enabled && (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <IoWalletOutline className="w-5 h-5" />
                    Invest
                  </button>
                )}
                <a
                  href={receivable.actions.view_details_url}
                  className="inline-flex items-center justify-center p-2.5 text-red-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-red-500 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  title="View Details"
                >
                  <PiFilePdfDuotone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Most Important: Investment Amount & Returns */}
            <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Investment</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">RM {receivable.purchase_price_rm.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Expected Return</span>
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">RM {receivable.expected_return_rm.toFixed(2)}</span>
              </div>
            </div>

            {/* Key Details */}
            <div className="space-y-2.5 text-sm mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Profit Rate (p.a.)</span>
                <span className="font-semibold text-primary-600 dark:text-primary-400">{receivable.profit_rate_pa}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Tenure</span>
                <span className="font-semibold text-gray-900 dark:text-white">{receivable.tenure_days} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Weight</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{receivable.asset.weight_gram}g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Collateral Value</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">RM {receivable.asset.appraised_value_rm.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Maturity Date</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{receivable.maturity_date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BookmarkProvider>
  );
}
