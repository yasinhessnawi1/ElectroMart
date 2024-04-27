function ProductSearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <SearchContainer>
        <SearchComponent onSearch={setSearchResults} />
      </SearchContainer>
      <SearchResultContainer>
        {searchResults.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image || 'placeholder-image-url'} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </SearchResultContainer>
    </>
  );
}

export default ProductSearchPage;