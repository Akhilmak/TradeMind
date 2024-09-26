package com.akhi.trading_application.implementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.akhi.trading_application.modal.Asset;
import com.akhi.trading_application.modal.Coin;
import com.akhi.trading_application.modal.User;
import com.akhi.trading_application.repository.AssetRepository;
import com.akhi.trading_application.service.AssetService;

@Service
public class AssetServiceImpl implements AssetService{


    @Autowired
    private AssetRepository assetRepository;

    @Override
    public Asset createAsset(User user, Coin coin, double quantity) {

        Asset asset=new Asset();
        asset.setUser(user);
        asset.setQuantity(quantity);
        asset.setCoin(coin);
        asset.setBuyPrice(coin.getCurrentPrice());
        return assetRepository.save(asset);
    }

    @Override
    public Asset getAssetById(Long assetId) throws Exception{

        return assetRepository.findById(assetId).orElseThrow(()->new Exception("Asset not found....!"));
    }

    @Override
    public Asset getAssetByUserIdAndId(Long userId, Long assetId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAssetByUserIdAndId'");
    }

    @Override
    public List<Asset> getUserAssets(Long userId) {
        
        return assetRepository.findByUserId(userId);
    }

    @Override
    public Asset updateAsset(Long assetId, double quantity) throws Exception{
        
        Asset oldAsset=getAssetById(assetId);

        oldAsset.setQuantity(quantity+oldAsset.getQuantity());

        return assetRepository.save(oldAsset);
    }

    @Override
    public Asset findAssetByUserIdAndCoinId(Long userId, String coinId) {

        return assetRepository.findAssetByUserIdAndCoinId(userId,coinId);
    }

    @Override
    public void deleteAsset(Long assetId) {
        
        assetRepository.deleteById(assetId);
    }

}
