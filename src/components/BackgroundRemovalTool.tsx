import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import guaranteeImage from '@/assets/guarantee-7-days.jpg';

export const BackgroundRemovalTool = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    console.log('🚀 Iniciando processo de remoção de fundo...');
    setIsProcessing(true);
    
    try {
      console.log('📷 Carregando imagem:', guaranteeImage);
      
      // Load the guarantee image
      const img = await loadImageFromUrl(guaranteeImage);
      console.log('✅ Imagem carregada com sucesso');
      
      // Remove background
      console.log('🤖 Iniciando processamento com IA...');
      const processedBlob = await removeBackground(img);
      console.log('✅ Processamento concluído');
      
      // Create object URL for display
      const imageUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(imageUrl);
      
      // Convert blob to base64 and save as new file
      const reader = new FileReader();
      reader.onload = function() {
        const base64Data = reader.result as string;
        // Create a download link for the base64 data
        const link = document.createElement('a');
        link.href = base64Data;
        link.download = 'guarantee-7-days-no-bg.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('💾 Nova imagem salva e baixada');
        alert('Imagem processada! Baixe a nova imagem e substitua manualmente o arquivo guarantee-7-days.jpg por guarantee-7-days-no-bg.png na pasta src/assets/');
      };
      reader.readAsDataURL(processedBlob);
      
    } catch (error) {
      console.error('❌ Erro ao remover fundo:', error);
      alert(`Erro ao processar a imagem: ${error.message}`);
    } finally {
      setIsProcessing(false);
      console.log('🏁 Processo finalizado');
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