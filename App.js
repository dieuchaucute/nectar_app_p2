import React, { useState } from 'react';
import { View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import BeveragesScreen from './src/screens/BeveragesScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import BottomTabs from './src/components/BottomTabs';

export default function App() {
  const [activeTab, setActiveTab] = useState('shop');
  const [route, setRoute] = useState('tabs');

  const [selectedProduct, setSelectedProduct] = useState({
    name: '',
    subtitle: '',
    price: 0,
  });

  const openProduct = (product) => {
    setSelectedProduct(product);
    setRoute('productDetail');
  };

  const openBeverages = () => {
    setRoute('beverages');
  };

  const backToTabs = () => {
    setRoute('tabs');
  };

  let content = null;

  if (route === 'productDetail') {
    content = (
      <ProductDetailScreen
        product={selectedProduct}
        onBack={backToTabs}
      />
    );
  } else if (route === 'beverages') {
    content = (
      <BeveragesScreen
        onBack={backToTabs}
        onOpenProduct={openProduct}
      />
    );
  } else if (activeTab === 'shop') {
    content = (
      <HomeScreen
        onOpenProduct={openProduct}
        onOpenBeverages={openBeverages}
      />
    );
  } else if (activeTab === 'explore') {
    content = (
      <ExploreScreen
        onOpenBeverages={openBeverages}
      />
    );
  } else {
    content = <View style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {content}

      {route === 'tabs' && (
        <BottomTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      )}
    </View>
  );
}