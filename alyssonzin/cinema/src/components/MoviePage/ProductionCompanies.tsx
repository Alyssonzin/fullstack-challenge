import ProductionCompany from "../../types/ProductionCompany";
import CompanyLogo from "../CompanyLogo";

interface ProductionCompaniesProps {
    companies: ProductionCompany[];
}

export default function ProductionCompanies({ companies }: ProductionCompaniesProps) {
    return (
        <div className="grid grid-cols-2 gap-10 p-6 bg-slate-50 outline outline-offset-4 outline-slate-50 rounded">
            {
                companies.map(company => (
                    company.logo_path &&
                    <div
                        className="flex justify-center items-center"
                        key={company.id}
                    >
                        <CompanyLogo logo_path={company.logo_path} />
                    </div>
                ))
            }
        </div>
    );
}