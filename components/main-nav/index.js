import { useState } from 'react';
import cs from 'classnames';

import { Hide } from '../interactions/show-hide';
import {TriangleUpIcon} from "../icons/triangle-up";
import styles from './main-nav.module.scss';

export function MegaMenuContainer({ categories, className }) {
  const [activeCategory, setActiveCategory] = useState(false);

  return (
    <MegaMenu
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      categories={categories}
      className={className}
    />
  );
}

function MegaMenu({ activeCategory, setActiveCategory, categories, className }) {
  return (
    <div
      className={cs(styles.brMegaMenu, 'inline-flex w-auto text-gray-800', className)}
      onMouseLeave={() => setActiveCategory(false)}
    >
      <div className={cs('bg-white border-gray-200 border w-64', className)}>
        <ul className="pt-4 pb-4">
          {categories.map((category) => (
            <MenuItem
              activeCategory={activeCategory}
              category={category}
              key={category.name}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </ul>
      </div>
      <Hide
        visibility={
          activeCategory && activeCategory.children && activeCategory.children.length !== 0
        }
      >
        <div
          className={cs(
            'sub-menu w-128 p-4 bg-white border border-gray-400 text-sm',
            styles.brMegaMenu_subMenu
          )}
        >
          <h3 className="font-bold mb-4">Types of {activeCategory.name}</h3>
          <ul className="flex flex-wrap">
            {activeCategory.children &&
              activeCategory.children.map((subCategory) => (
                <li
                  key={subCategory.name}
                  className="w-1/2 hover:underline cursor-pointer hover:text-orange-500"
                >
                  {subCategory.name}
                </li>
              ))}
          </ul>
        </div>
      </Hide>

      <div className={styles.triangle}>
        <TriangleUpIcon/>
      </div>
    </div>
  );
}
function MenuItem({ activeCategory, category, setActiveCategory }) {
  return (
    <li
      className={cs(
        'pl-4 pr-4 pt-1 pb-1 hover:font-bold text-sm hover:text-base hover:text-orange-600 cursor-pointer flex items-center justify-between',
        { 'text-orange-600': category === activeCategory }
      )}
      onMouseEnter={(e) => setActiveCategory(category)}
    >
      {category.name}
      {category.children && category.children.length !== 0 && (
        <span className="block w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </li>
  );
}
function SubMenu({ parentCategory }) {
  return (
    <div className="submenu">
      <header className="font-bold">Types of {parentCategory.name}</header>
      <section>
        <ul>
          {parentCategory.children.map((subCategory) => (
            <li>{subCategory.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
