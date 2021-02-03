import { useState } from 'react';
import Head from 'next/head';
import cs from 'classnames';

import { CATEGORIES } from '../data/categories';
import { MegaMenuContainer } from '../components/main-nav';
import { Header } from '../components/header';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div className="wrapper font-sans" dir="rtl">
      <Header />
      <Hero />
      <Manufacturers />
      <Services />
    </div>
  );
}

function Manufacturers() {
  return (
    <div className="border border-gray-100 w-300 mx-auto mt-4 p-4 shadow-md rounded mb-10">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold  text-black mb-4">
          <span>تولید کنندگان برتر</span>
        </h2>
        <a href="#" className="text-xs text-blue-500 underline">
          <span>مشاهده همه تولید‌کنندگان</span>
        </a>
      </div>

      <ul className="flex text-sm text-gray-600">
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="/infineon.webp" alt="" />
          <p className="mt-8">ایران‌خودرو</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="xilinx.webp" alt="" />
          <p className="mt-8">جنرال‌موتورز</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="vishay.webp" alt="" />
          <p className="mt-8">ایران‌ایر</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="/nordic.webp" alt="" />
          <p className="mt-8">ایران‌خودرو</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="te.webp" alt="" />
          <p className="mt-8">سایپا</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="vishay.webp" alt="" />
          <p className="mt-8">ایران‌خودرو</p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <img src="/nordic.webp" alt="" />
          <p className="mt-8">ایران‌خودرو</p>
        </li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div className="border border-gray-100 w-300 mx-auto mt-4 p-4 shadow-md rounded mb-10">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-black mb-4">
          <span>دپارتمان‌ها و خدمات</span>
        </h2>
        <a href="#" className="text-xs text-blue-500 underline">
          <span>مشاهده همه سرویس‌ها</span>
        </a>
      </div>

      <ul className="flex text-sm font-bold text-gray-700">
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <p className="rounded-full w-48 h-48 bg-blue-100"></p>
          <p className="w-full mt-8 text-center pl-8 pr-8">
            <span>واحد بازرگانی تأمین قطعات وتجهیزات الکترونیکی و مخابراتی</span>
          </p>
          <p className="w-full text-gray-500 text-xs text-center pt-4">
            <span>در این واحد خدمات زیر صورت میگیرد</span>&nbsp;
            <span>طراحی و پشتیبانی توسط مهندسان ایرانی</span>
          </p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <p className="rounded-full w-48 h-48 bg-red-100"></p>
          <p className="w-full mt-8 text-center pl-8 pr-8">
            <span>واحد طراحی، ساخت و تولید عناصر ماکروویوی و مخابراتی</span>
          </p>
          <p className="w-full text-gray-500 text-xs text-center pt-4">
            <span>در این واحد خدمات زیر صورت میگیرد</span>&nbsp;
            <span>طراحی و پشتیبانی توسط مهندسان ایرانی</span>
          </p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <p className="rounded-full w-48 h-48 bg-green-100"></p>
          <p className="w-full mt-8 text-center pl-8 pr-8">
            <span>واحد مونتاژ ( ماشینی و دستی )، انواع PCB</span>
          </p>
          <p className="w-full text-gray-500 text-xs text-center pt-4">
            <span>در این واحد خدمات زیر صورت میگیرد</span>&nbsp;
            <span>طراحی و پشتیبانی توسط مهندسان ایرانی</span>
          </p>
        </li>
        <li className="p-4 m-4 flex flex-wrap justify-center items-center cursor-pointer">
          <p className="rounded-full w-48 h-48 bg-gray-100"></p>
          <p className="w-full mt-8 text-center pl-8 pr-8">
            <span>واحد تست و اندازه‌گیری</span>
          </p>
          <p className="w-full text-gray-500 text-xs text-center pt-4">
            <span>در این واحد خدمات زیر صورت میگیرد</span>&nbsp;
            <span>طراحی و پشتیبانی توسط مهندسان ایرانی</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
