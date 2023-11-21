// import logo from './logo.svg';
import './App.css';
import Card from './Card';
function App() {
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      <Card plan="Free" price="$0" users="Single User" storage="5GB Storage" projects="Unlimited Public Projects" access="Community Access" privateproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Reports"></Card>
      <Card plan="Plus" price="$9" users="5 Users" storage="50GB Storage" projects="Unlimited Public Projects" access="Community Access" privateproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Reports"></Card>
      <Card plan="Pro" price="$49" users="Unlimited Users" storage="150GB Storage" projects="Unlimited Public Projects" access="Community Access" privateproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Unlimited Free Subdomains" reports="Monthly Status Reports"></Card>
      </div>
      </div>
    </section>
  
  );
}

export default App;
