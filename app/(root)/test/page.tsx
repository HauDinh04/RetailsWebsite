import React from "react";
import {fetchOrders} from "@/lib/Categories.action";

async function Page() {
    const orders: { data: OrderType[] } = await fetchOrders();
    return (
        <div>
            <h1 className={"text-center"}>
                {orders.data.map((item, index) => (
                    <div key={index}>
                        <div className="">{item.order_code}</div>
                        <div className="">{item.name}</div>
                    </div>
                ))}
            </h1>
        </div>
    );
}

export default Page;
