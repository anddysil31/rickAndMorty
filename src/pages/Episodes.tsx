import useSwr from 'swr'
import { rickAndMortyEpisodes, fetchRickAndMorty } from '../services/rickAndMorty';
import { Card, Space } from 'antd';

interface EpisodesData{
  results:Array<{
    id:number;
    name:string;
    air_date:string;
    episode:string;

  }>
}
export const Episodes = () => {
  const { data, error } = useSwr<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
    suspense: false,
});
  return(
      <>
        <h1>Episodes</h1>
        {data?.results.map((episode:any)=>(
         
            <Card key={episode.id} title={episode.name}>
              <p>{episode.air_date}</p>
              <p>{episode.episode}</p>
            </Card>
        
        ))}

      </>

  )
}
