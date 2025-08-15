import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import guaranteeImage from '@/assets/guarantee-7-days.jpg';

export const BackgroundRemovalTool = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    setIsProcessing(true);
    try {
      // Load the guarantee image
      const img = await loadImageFromUrl(guaranteeImage);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create object URL for display
      const imageUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(imageUrl);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'guarantee-7-days-no-bg.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Erro ao remover fundo:', error);
      alert('Erro ao processar a imagem. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Remover Fundo da Garantia</h3>
      <Button 
        onClick={handleRemoveBackground}
        disabled={isProcessing}
        className="mb-2"
      >
        {isProcessing ? 'Processando...' : 'Remover Fundo'}
      </Button>
      
      {processedImage && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Imagem processada:</p>
          <img 
            src={processedImage} 
            alt="Garantia sem fundo" 
            className="w-20 h-20 object-contain border border-border rounded"
          />
        </div>
      )}
    </div>
  );
};