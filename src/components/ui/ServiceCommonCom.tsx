interface ServiceCommonComProps {
    serviceName: string;
  }
  
  const ServiceCommonCom = ({ serviceName }: ServiceCommonComProps) => {
    return (
      <div>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              {serviceName}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, lacus ac pharetra efficitur, nunc odio ultricies metus,
              eget lacinia nunc sit amet libero. Sed nec nisl nec libero efficitur
              fermentum. Nulla facilisi. Aenean id libero nec nisl ultricies
              fringilla. Nam nec odio nec nunc ultricies maximus. Ut lacinia, nunc
              nec tincidunt ligula, nunc nec tinc.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCommonCom;
  