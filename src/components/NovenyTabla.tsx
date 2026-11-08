import NovenySor from "./NovenySor";
import { useNovenyContext } from "../contexts/NovenyContext";

function NovenyTabla() {
  const { novenylista } = useNovenyContext();

  return (
    <table className="block w-full text-left text-sm md:table md:table-auto md:border-separate md:border-spacing-0 md:overflow-hidden md:rounded-xl md:bg-white md:shadow-sm md:ring-1 md:ring-slate-200">
      <thead className="hidden bg-slate-50 md:table-header-group">
        <tr>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">
            Név
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">
            Latin
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-right">
            Család
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-right">
            Környezet
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-center">
            Fémx
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-center">
            Virágzás
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-center">
            Gyümölsdérett
          </th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-center">
            Metszés
          </th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-3 md:table-row-group">
        {novenylista.map((noveny) => (
          <NovenySor noveny={noveny} key={noveny.id} />
        ))}
      </tbody>
    </table>
  );
}

export default NovenyTabla;
