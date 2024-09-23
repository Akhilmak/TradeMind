package com.akhi.trading_application.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.repository.CoinRepository;
import com.akhi.trading_application.service.CoinService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class CoinServiceImpl implements CoinService{


    @Autowired
    private CoinRepository coinRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public List<Coin> getCoinList(int page) throws Exception{
        
        String url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page="+page;

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            List<Coin> coinList=objectMapper.readValue(response.getBody(), new TypeReference<List<Coin>>(){});

            return coinList;
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getMarketChart(String coinId, int days) throws Exception{
        
        String url="https://api.coingecko.com/api/v3/coins/"+coinId+"/market_chart?vs_currency=usd&days="+days;

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);


            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getCoinDetails(String coinId) throws Exception{
        String url="https://api.coingecko.com/api/v3/coins/"+coinId;

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            JsonNode jsonNode=objectMapper.readTree(response.getBody());

            Coin coin=new Coin();

            coin.setId(jsonNode.get("id").asText());
            coin.setName(jsonNode.get("name").asText());
            coin.setSymbol(jsonNode.get("symbol").asText());
            coin.setImage(jsonNode.get("iamge").get("large").asText()); //the image field has three fields sm, med, lar with links to images

            JsonNode market_data=jsonNode.get("market_data");

            coin.setCurrentPrice(market_data.get("current_price").get("usd").asDouble());
            coin.setMarketCap(market_data.get("market_cap").get("usd").asLong());
            coin.setMarketCapRank(market_data.get("market_cap_rank").asInt());
            coin.setTotalVolume(market_data.get("total_volume").get("usd").asLong());
            coin.setHigh24h(market_data.get("high_24h").get("usd").asDouble());
            coin.setLow24h(market_data.get(url).get("low_24h").get("usd").asDouble());
            coin.setPriceChange24h(market_data.get("price_change_24h").asDouble());
            coin.setPriceChangePercentage24h(market_data.get("price_change_percentage_24h").asDouble());
            coin.setMarketCapChange24h(market_data.get("market_cap_change_24h").asLong());
            coin.setMarketCapChangePercentage24h(market_data.get("market_cap_change_percentage_24h").asDouble());

            coin.setTotalSupply(market_data.get("total_supply").asDouble());

            coinRepository.save(coin);

            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Coin findById(String coinId) throws Exception{

        Optional<Coin> optionalCoin=coinRepository.findById(coinId);
        if(optionalCoin.isEmpty()) throw new Exception("Coinnot Found....!");
        return optionalCoin.get();

    }

    @Override
    public String searchCoin(String keyWord) throws Exception{

        String url="https://api.coingecko.com/api/v3/search?query="+keyWord;

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);


            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
        
    }

    @Override
    public String getTop50CoinByMarketCapRank() throws Exception{
        String url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);


            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getTradingCoins() throws Exception{
        String url="https://api.coingecko.com/api/v3/coins/search/trading";

        RestTemplate restTemplate=new RestTemplate();

        try {
            HttpHeaders httpHeaders=new HttpHeaders();

            HttpEntity<String> entity=new HttpEntity<>("parameters",httpHeaders);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);


            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            throw new Exception(e.getMessage());
        }
    }

}
