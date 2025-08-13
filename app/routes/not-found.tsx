import { useTranslation } from "react-i18next";
import { data, href, Link } from "react-router";
import { getInstance } from "~/middleware/i18next";
import type { Route } from "./+types/not-found";

export const handle = {
  i18n: "notFound",
};

export async function loader({context}: Route.LoaderArgs) {
  const i18n = getInstance(context);
  const foo = i18n.t("foo");
  return data({ foo }, { status: 404 });
}

export default function Component({ loaderData: { foo } }: Route.ComponentProps) {
  let { t } = useTranslation("notFound");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <p>{foo}</p>

      <Link to={href("/")}>{t("backToHome")}</Link>
    </div>
  );
}
