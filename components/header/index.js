import { SearchIcon } from '../icons/search';
import { ChevronDownIcon } from '../icons/chevron-down';

export function Header() {
  return (
    <div className="header">
      {/* Info Bar */}
      <div className="top-bar w-300 h-7 mx-auto flex justify-between text-xs text-gray-600 items-center">
        <div className="order-1">
          <span className="flex items-center">
            (&nbsp;<span dir="ltr">0910 - 233 0994</span>&nbsp;)
            <span className="mr-1">تماس با ما</span>
          </span>
        </div>
        <div className="flex items-center" dir="ltr">
          <span className="mr-4">فارسی</span>
          <span className="font-bold mt-1">$ USD</span>
        </div>
      </div>
      {/* end Info Bar */}

      {/* Search Bar */}
      <div className="w-300 h-16 mx-auto flex items-center justify-between mb-4">
        <span className="font-bold text-3xl ">بروترونیک</span>
        <div className="flex flex-none items-center" dir="ltr">
          <input
            className="search-input w-96 h-10 pr-4 placeholder-gray-400 text-xs border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25"
            type="search"
            placeholder="کد قطعه یا اسم یا ..."
            dir="rtl"
          />
          <button className="w-10 h-10 bg-black">
            <span className="text-white w-6 h-6 block mx-auto">
              <SearchIcon />
            </span>
          </button>
        </div>
        <span className="invisible font-bold text-3xl">بروترونیک</span>
      </div>
      {/* end Search Bar */}

      {/* Nav Bar */}
      <div className="bg-orange-500">
        <nav
          className="nav w-300 h-14 mx-auto flex justify-between items-center text-white text-sm"
          dir="ltr"
        >
          <ul className="flex">
            <li className="flex items-center mr-4 font-bold cursor-pointer">
              <span className="w-4 block pt-1 ml-1 font-bold">
                <ChevronDownIcon />
              </span>
              <span>محصولات</span>
            </li>
            <li className="mr-4 cursor-pointer">تولید‌کنندگان</li>
            <li className="mr-4 cursor-pointer">خدمات</li>
            <li className="mr-4 cursor-pointer">منابع فنی</li>
            <li className="mr-4 cursor-pointer">راهنما</li>
          </ul>
          <ul className="flex">
            <li className="mr-4 cursor-pointer">حساب کاربری و سفارشات</li>
            <li className="cursor-pointer">سبد خرید</li>
          </ul>
        </nav>
      </div>
      {/* end Nav Bar */}
    </div>
  );
}
