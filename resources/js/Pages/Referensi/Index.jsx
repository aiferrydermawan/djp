import React, { useState, useEffect, useCallback } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import { debounce, pickBy } from "lodash";

function Index(props) {
    const {
        data: referensi_all,
        meta,
        filtered,
        attributes,
    } = props.referensi_all;
    const title = props.title;
    const kategori = props.kategori;
    const myTitle = capitalizeWords(title);

    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    const reload = useCallback(
        debounce((query) => {
            router.get(
                route("referensi.index", { kategori: kategori }),
                { ...pickBy(query), page: query.search ? 1 : query.page },
                {
                    preserveState: true,
                    preserveScroll: true,
                },
            );
        }, 150),
        [],
    );

    useEffect(() => {
        let numbers = [];
        for (
            let i = attributes.per_page;
            i <= attributes.total / attributes.per_page;
            i = i + attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);

    const handleChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });

    useEffect(() => reload(params), [params]);

    const deleteReferensi = async (id) => {
        router.delete(
            `${route("referensi.destroy", { id: id })}?kategori=${kategori}`,
        );
    };

    return (
        <>
            <Head title={myTitle} />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>{myTitle}</li>
                        </ul>
                    </div>
                    <div className={`mt-5 flex justify-between`}>
                        <div>
                            <Input
                                type="text"
                                className={`w-full max-w-xs`}
                                name="search"
                                id="search"
                                placeholder="cari"
                                value={params.search ?? ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Link
                                className={`btn btn-primary`}
                                href={route("referensi.create", {
                                    kategori: kategori,
                                })}
                            >
                                Buat
                            </Link>
                        </div>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <table className={`table table-xs`}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referensi_all.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{meta.from + index}</td>
                                            <td>{item.nama}</td>
                                            <td>
                                                <Link
                                                    className={`btn btn-warning btn-xs mr-1`}
                                                    href={`${route("referensi.edit", { id: item.id })}?kategori=${kategori}`}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteReferensi(item.id)
                                                    }
                                                    className={`btn btn-error btn-xs`}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {meta.per_page < meta.total ? (
                                <div className={`join mt-5`}>
                                    {meta.links.map(
                                        (link, index) =>
                                            link.url && (
                                                <Link
                                                    className={`btn join-item ${link.active ? "btn-active" : null}`}
                                                    key={index}
                                                    href={`${link.url}&kategori=${kategori}`}
                                                    disabled={link.active}
                                                >
                                                    {link.label}
                                                </Link>
                                            ),
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
}

export default Index;
