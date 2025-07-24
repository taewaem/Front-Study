import { useState } from "react"; //내부 상태를 관리하는 hook
import { useNavigate } from "react-router-dom"; //페이지의 이동 즉 Routes 기능을 제공하는 hook
import { Search, Filter } from "lucide-react"; //Search, Filter 아이콘 관리
import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  const navigate = useNavigate(); //navigate -> 페이지 이동 시 사용될 함수
  const [searchKeyword, setSearchKeyword] = useState(""); //검색어, 검색함수
  const [selectedCategory, setSelectedCategory] = useState(""); //선택된 카테고리

  const handleSearch = () => {
    //상품 API 추후 등록
    console.log("검색 실행 됨", searchKeyword, selectedCategory);
  };

  const categories = [
    "전자제품",
    "의류",
    "도서",
    "스포츠",
    "가구",
    "식품",
    "화장품",
    "기타",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">🛍️ 쇼핑몰</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/login")}>
                로그인
              </Button>
              <Button onClick={() => navigate("/signup")}>회원가입</Button>
            </div>
          </div>
        </div>
      </div>

      {/* 검색 섹션 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="상품명을 검색하세요..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-10"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input w-32"
              >
                <option value="">전체 카테고리</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Button onClick={handleSearch}>
                <Filter className="w-4 h-4 mr-1" />
                검색
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 본문 안내 메시지 */}
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          상품 검색 기능만 남겨두었습니다!
        </h2>
        <p className="text-gray-600">
          상품 목록은 제거된 상태입니다. 검색이나 카테고리 선택은 UI만
          유지됩니다.
        </p>
      </div>
    </div>
  );
};

export default Home;
