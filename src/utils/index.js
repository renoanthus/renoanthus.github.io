import { sharedPreferences } from "../styles/theme"

// breakpoints.lg needs to be cleaned and parsed since it is a string like '1200px'
export const detectMobileAndTablet = windowWidth =>
  windowWidth <
  parseInt(sharedPreferences.breakpoints.lg.match(/\d+/gi).join(""))

// detect server-side-rendering to fix bugs while gatsby build
export const isSSR = typeof window === "undefined"

// used to parse the publication date of medium articles
export const parseDate = date => {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  switch (month) {
    case "01":
      return day + " Jan " + year
    case "02":
      return day + " Feb " + year
    case "03":
      return day + " Mar " + year
    case "04":
      return day + " Apr " + year
    case "05":
      return day + " May " + year
    case "06":
      return day + " Jun " + year
    case "07":
      return day + " Jul " + year
    case "08":
      return day + " Aug " + year
    case "09":
      return day + " Sep " + year
    case "10":
      return day + " Oct " + year
    case "11":
      return day + " Nov " + year
    case "12":
      return day + " Dec " + year
    default:
      return "Present"
  }
}
