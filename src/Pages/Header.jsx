import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t} = useTranslation();
  return (
     <div className="p-4">
      <h1 className="text-3xl font-bold">Header Page</h1>
      <Link to="/" className="text-blue-500 underline">
          Go to About Page
        </Link>
         <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
    </div>
  )
}

export default Header
