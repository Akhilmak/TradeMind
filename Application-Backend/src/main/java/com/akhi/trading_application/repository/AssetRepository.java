package com.akhi.trading_application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.Asset;

public interface AssetRepository extends JpaRepository<Asset,Long>{

    List<Asset> findByUserId(Long userId);

    Asset findAssetByUserIdAndCoinId(Long userId,String coinId);




}
