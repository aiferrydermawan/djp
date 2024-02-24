import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";

function CustomCombobox({ selected, onChange, items, placeholder }) {
    const [query, setQuery] = useState("");

    const filteredItems =
        query === ""
            ? items
            : items.filter((item) =>
                  item.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, "")),
              );

    const handleSelectionChange = (newValue) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div>
            <Combobox
                value={selected}
                onChange={(newValue) => {
                    onChange(newValue); // Memanggil fungsi onChange dari props
                }}
            >
                <div className="relative mt-1">
                    <div className="input input-bordered relative w-full">
                        <Combobox.Input
                            className="input input-bordered w-full border-0 bg-transparent p-0"
                            displayValue={(item) => (item ? item.name : "")}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <IconSelector
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {/* Opsi "Kosong" */}
                            <Combobox.Option
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                            ? "bg-red-600 text-white"
                                            : "text-gray-900"
                                    }`
                                }
                                value={null}
                            >
                                {({ active }) => (
                                    <span
                                        className={`block truncate ${active ? "font-medium" : "font-normal"}`}
                                    >
                                        Kosong
                                    </span>
                                )}
                            </Combobox.Option>
                            {/* Opsi lainnya */}
                            {filteredItems.map((item) => (
                                <Combobox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-blue-600 text-white"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                                            >
                                                {item.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`}
                                                >
                                                    <IconCheck
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default CustomCombobox;
