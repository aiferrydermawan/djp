import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

export default function Dashboard({
    auth,
    firstCard,
                                      secondCard,
    thirdCard,
    fourthCard,
    firstChart,
    secondChart,
}) {
    const [chart1, setChart1] = useState({
        label:
            firstChart.length > 0
                ? firstChart.map((data) => data.jenis_permohonan.nama)
                : ["Kosong"],
        data: firstChart.length > 0 ? firstChart.map((data) => data.total) : [],
    });
    const [chart2, setChart2] = useState({
        label:
            secondChart.length > 0
                ? secondChart.map((data) => data.jenis_permohonan.nama)
                : ["Kosong"],
        data:
            secondChart.length > 0 ? secondChart.map((data) => data.total) : [],
    });
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-5">
                <p className={`mb-5 text-2xl font-bold`}>
                    Welcome back, {auth.user.name}
                </p>
                <div className="flex gap-5">
                    <div className="card w-1/4 bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="font-medium">
                                Tunggakan Berkas KEB - NKEB
                            </h2>
                            <div className="stat-value">{firstCard}</div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="font-medium">
                                Tunggakan Berkas SUB - STG
                            </h2>
                            <div className="stat-value">{secondCard}</div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="font-medium">
                                Berkas Jatuh Tempo Bulan Ini
                            </h2>
                            <div className="stat-value">{thirdCard}</div>
                        </div>
                    </div>
                    <div className="card w-1/4 bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="font-medium">
                                Berkas Jatuh Tempo Bulan Depan
                            </h2>
                            <div className="stat-value">{fourthCard}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-5">
                    <div className="card w-1/2 bg-base-100 shadow">
                        <div className="card-body">
                            <div className="card-title">Tunggakan Berkas</div>
                            <div>
                                <Doughnut
                                    datasetIdKey="id"
                                    data={{
                                        labels: chart1.label,
                                        datasets: [
                                            {
                                                id: 1,
                                                label: "Tunggakan Berkas",
                                                data: chart1.data,
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/2 bg-base-100 shadow">
                        <div className="card-body">
                            <div className="card-title">Permohonan Masuk</div>
                            <div>
                                <Doughnut
                                    datasetIdKey="id"
                                    data={{
                                        labels: chart2.label,
                                        datasets: [
                                            {
                                                id: 1,
                                                label: "Permohonan Masuk",
                                                data: chart2.data,
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
