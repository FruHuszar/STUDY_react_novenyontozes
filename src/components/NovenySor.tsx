import { type NovenyTipus } from "../data/novenyek";
import { useNovenyContext } from "../contexts/NovenyContext";

interface SorPropsType {
  noveny: NovenyTipus;
}

function NovenySor({ noveny }: SorPropsType) {
  const { torol } = useNovenyContext();

  const formatDatumok = (datumok: Date[]) => {
    if (!datumok || datumok.length === 0) return "-";
    return datumok
      .map((datum) => new Date(datum).toLocaleDateString("hu-HU"))
      .join(", ");
  };

  return (
    <tr className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-colors md:table-row md:rounded-none md:p-0 md:shadow-none md:ring-0 md:hover:bg-slate-50 md:last:[&>td]:border-b-0">
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle col-span-2 text-base font-semibold text-slate-900 md:text-sm before:content-['Név'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.nev}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle col-span-2 text-slate-600 before:content-['Latin'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.latin}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle font-medium text-slate-900 tabular-nums md:text-right before:content-['Család'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.csalad}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Környezet'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.kornyezet}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Fény'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.feny}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Leírás'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {noveny.leiras}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Virágzás'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {formatDatumok(noveny.viragzas)}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Metszés'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {formatDatumok(noveny.metszes)}
      </td>
      <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Gyümölcs'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">
        {formatDatumok(noveny.gyumolcs)}
      </td>
      <td className="col-span-2 flex justify-end border-t border-slate-100 pt-3 md:table-cell md:border-t-0 md:border-b md:px-4 md:py-3 md:text-center md:align-middle">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 ring-1 ring-red-200 ring-inset transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => torol(noveny.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default NovenySor;
