import { useEffect, useState } from "react";

type Weather = {
    main: string,
    icon: string,
    description: string,
}

type OpenWeatherMap = {
    weather: Weather[]
}

// delay秒だけ処理を休止するSleep関数
// 実装の参考：https://typescriptbook.jp/reference/asynchronous/promise#%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93%E5%88%9D%E3%82%81%E3%81%AB%E6%B1%BA%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%9Fpromise%E3%82%92%E8%BF%94%E3%81%99---promiserace
function sleep(delay: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, delay);
    });
}

// 天気情報を取得するための関数
const fetchWeather = async () => {
    // 処理を遅延させるためのダミーの休止処理
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ibaraki&lang=ja&appid=6fd9e16f6bf0ed878cc6095d5db390c8`);
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
};

export default function QueryPre() {
    // 天気予報(info)、loading(ロード中か？)、error(エラー情報)を準備
    const [data, setData] = useState<OpenWeatherMap>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // コンポーネント起動時に天気情報を取得
    useEffect(() => {
        setLoading(true);
        fetchWeather()
        // 成功時はinfoを更新
        .then(result => setData(result))
        // 失敗時はerrorを更新
        .catch(err => setError(err.message))
        // 成否に関わらず、isLoadingを更新
        .finally(() => setLoading(false));
    }, []);

    // ロード中であれば、ローディングメッセージを表示
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // 通信エラーが発生した場合には、エラーメッセージを表示
    if (error) {
        return <p>Error: {error}</p>
    }

    // ロード中でもエラーでもない場合に、結果を表示
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}