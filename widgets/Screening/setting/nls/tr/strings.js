///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "standardUnit": "Standart Birim",
    "metricUnit": "Metrik Birim"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiz",
    "selectAnalysisLayerLabel": "Analiz katmanlarını seç",
    "addLayerLabel": "Katman Ekle",
    "noValidLayersForAnalysis": "Seçilen web haritasında geçerli katman bulunamadı.",
    "noValidFieldsForAnalysis": "Seçilen web haritasında geçerli alan bulunamadı. Seçili katmanı kaldırın.",
    "addLayersHintText": "İpucu: Analiz edilecek ve raporda görüntülenecek katman ve alanları seçin",
    "addLayerNameTitle": "Katman Adı",
    "addFieldsLabel": "Alan Ekle",
    "addFieldsPopupTitle": "Alanları Seç",
    "addFieldsNameTitle": "Alan Adları",
    "aoiToolsLegendLabel": "AOI Araçları",
    "aoiToolsDescriptionLabel": "İlgi alanları oluşturmak ve etiketlerini belirtmek için araçlar etkinleştirin",
    "placenameLabel": "Yer adı",
    "drawToolsLabel": "Çizim Araçları",
    "uploadShapeFileLabel": "Bir Shapefile Yükle",
    "coordinatesLabel": "Koordinatlar",
    "coordinatesDrpDwnHintText": "İpucu: Girilen çapraz çizgilerin görüntüleneceği birimi seçin",
    "coordinatesBearingDrpDwnHintText": "İpucu: Girilen çapraz çizgilerin görüntüleneceği yönü seçin",
    "allowShapefilesUploadLabel": "Analize shapefile yüklenmesine izin ver",
    "areaUnitsLabel": "Alan/Uzunluk görüntüleme birimi",
    "allowShapefilesUploadLabelHintText": "İpucu: Rapor Sekmesindeki 'Analize Shapefile Yükle' seçeneğini görüntüle",
    "maxFeatureForAnalysisLabel": "Analizdeki detay sayısı üst sınırı",
    "maxFeatureForAnalysisHintText": "İpucu: Analiz için detay sayısı üst sınırını belirleyin",
    "searchToleranceLabelText": "Arama toleransı (feet)",
    "searchToleranceHint": "İpucu: Arama toleransı yalnızca nokta ve çizgi girişleri analiz edilirken kullanılır"
  },
  "downloadTab": {
    "downloadLegend": "İndirme Ayarları",
    "reportLegend": "Rapor Ayarları",
    "downloadTabLabel": "İndir",
    "syncEnableOptionLabel": "Detay Katmanları",
    "syncEnableOptionHint": "İpucu: Belirtilen biçimlerdeki ilgi alanıyla kesişen detaylar hakkındaki detay bilgilerini indirmek için kullanılır.",
    "syncEnableOptionNote": "Not: Coğrafi Veri Tabanı Dosyası seçeneği için eşzamanlama etkin detay servisleri gerekir.",
    "extractDataTaskOptionLabel": "Veri Ayıklama Görevi coğrafi işleme servisi",
    "extractDataTaskOptionHint": "İpucu: Coğrafi Veri Tabanı Dosyası veya Shapefile biçimindeki ilgi alanıyla kesişen detayları indirmek için yayınlanmış bir Veri Ayıklama Görevi coğrafi işleme servisi kullanın.",
    "cannotDownloadOptionLabel": "İndirmeyi devre dışı bırak",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Katman adı",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Coğrafi Veri Tabanı Dosyası",
      "allowDownloadLabel": "İndirmeye İzin Ver"
    },
    "setButtonLabel": "Ayarla",
    "GPTaskLabel": "Coğrafi işleme servisi url’sini belirtin",
    "printGPServiceLabel": "Servis URL'sini Yazdır",
    "setGPTaskTitle": "Gerekli Coğrafi İşleme Servisi URL’sini Belirtin",
    "logoLabel": "Logo",
    "logoChooserHint": "İpucu: Görüntüyü değiştirmek için görüntü simgesine tıklayın",
    "footnoteLabel": "Altbilgi",
    "columnTitleColorPickerLabel": "Sütun başlığı rengi",
    "reportTitleLabel": "Rapor Başlığı",
    "errorMessages": {
      "invalidGPTaskURL": "Geçersiz coğrafi işleme servisi. Veri Ayıklama Görevi içeren coğrafi işleme servisi seçin.",
      "noExtractDataTaskURL": "Veri Ayıklama Görevi içeren herhangi bir coğrafi işleme servisi seçin."
    }
  },
  "generalTab": {
    "generalTabLabel": "Genel",
    "tabLabelsLegend": "Panel Etiketleri",
    "tabLabelsHint": "İpucu: Etiketleri belirtin",
    "AOITabLabel": "İlgi Alanı Paneli",
    "ReportTabLabel": "Rapor Paneli",
    "bufferSettingsLegend": "Tampon Ayarları",
    "defaultBufferDistanceLabel": "Varsayılan Tampon Mesafesi",
    "defaultBufferUnitsLabel": "Tampon Birimleri",
    "generalBufferSymbologyHint": "İpucu: Tanımlı ilgi alanları etrafındaki tamponları görüntülemek için kullanılacak sembolojiyi ayarlayın",
    "aoiGraphicsSymbologyLegend": "AOI Grafik Sembolojisi",
    "aoiGraphicsSymbologyHint": "İpucu: Nokta, çizgi ve alan biçiminde ilgi alanları tanımlarken kullanılacak sembolojiyi ayarlayın",
    "pointSymbologyLabel": "Nokta",
    "previewLabel": "Önizleme",
    "lineSymbologyLabel": "Çizgi",
    "polygonSymbologyLabel": "Alan",
    "aoiBufferSymbologyLabel": "Tampon Sembolojisi",
    "pointSymbolChooserPopupTitle": "Adres veya konum sembolü",
    "polygonSymbolChooserPopupTitle": "Alanı vurgulamak için sembol seçin",
    "lineSymbolChooserPopupTitle": "Çizgiyi vurgulamak için sembol seçin",
    "aoiSymbolChooserPopupTitle": "Tampon sembolünü ayarlayın"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Kaynak Ayarlarını Ara",
    "searchSourceSettingTitle": "Kaynak Ayarlarını Ara",
    "searchSourceSettingTitleHintText": "Coğrafi kodlama hizmetlerini veya detay katmanlarını arama kaynağı olarak ekleyin ve yapılandırın. Belirtilen bu kaynaklar arama kutusunda neyin aranabileceğini belirler",
    "addSearchSourceLabel": "Arama Kaynağı Ekle",
    "featureLayerLabel": "Detay Katmanı",
    "geocoderLabel": "Coğrafi Kodlayıcı",
    "generalSettingLabel": "Genel Ayar",
    "allPlaceholderLabel": "Tümünü aramak için yer tutucu metin:",
    "allPlaceholderHintText": "İpucu: Tüm katmanları ve coğrafi kodlayıcıyı ararken yer tutucu olarak gösterilecek metni girin",
    "generalSettingCheckboxLabel": "Bulunan detay veya konum için açılır pencere göster",
    "countryCode": "Ülke veya Bölge Kodları",
    "countryCodeEg": "örneğin ",
    "countryCodeHint": "Bu değer boş bırakılırsa tüm ülkeler ve bölgeler aranır",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Yalnızca geçerli harita yayılımını ara",
    "zoomScale": "Yakınlaştırma Ölçeği",
    "locatorUrl": "Coğrafi Kodlayıcı URL'si",
    "locatorName": "Coğrafi Kodlayıcı Adı",
    "locatorExample": "Örnek",
    "locatorWarning": "Coğrafi kodlama servisinin bu sürümü desteklenmiyor. Araç, 10.0 veya üstü sürümdeki coğrafi kodlama servisini destekliyor.",
    "locatorTips": "Coğrafi kodlama hizmeti öneri özelliğini desteklemediğinden öneriler kullanılamıyor.",
    "layerSource": "Katman Kaynağı",
    "setLayerSource": "Kaynak Katmanı Ayarla",
    "setGeocoderURL": "Coğrafi Kodlayıcı URL'si Düzenle",
    "searchLayerTips": "Detay servisi sayfa oluşturma özelliğini desteklemediğinden öneriler kullanılamıyor.",
    "placeholder": "Yer Tutucu Metni",
    "searchFields": "Alanlarda Ara",
    "displayField": "Alan Görüntüle",
    "exactMatch": "Tam Eşleşme",
    "maxSuggestions": "Maksimum Öneri Sayısı",
    "maxResults": "Maksimum Sonuç Sayısı",
    "enableLocalSearch": "Yerel aramayı etkinleştir",
    "minScale": "Min Ölçek",
    "minScaleHint": "Harita ölçeği bu ölçekten daha büyük olduğunda yerel arama uygulanır",
    "radius": "Yarıçap",
    "radiusHint": "Coğrafi kodlama adaylarının sıralamasını yükseltmek için kullanılan geçerli harita merkezi etrafındaki bir alanın yarıçapını belirtir, böylelikle konuma en yakın olan adaylar öncelikli olarak döndürülür",
    "setSearchFields": "Arama Alanlarını Ayarla",
    "set": "Ayarla",
    "invalidUrlTip": "${URL} URL'si geçersiz veya erişilemez durumda.",
    "invalidSearchSources": "Geçersiz arama kaynağı ayarları"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Gerekli tüm alanları doldurun",
    "bufferDistanceFieldsErrorMsg": "Geçerli değer girin",
    "invalidSearchToleranceErrorMsg": "Arama toleransı için geçerli değer girin",
    "atLeastOneCheckboxCheckedErrorMsg": "Geçersiz yapılandırma",
    "noLayerAvailableErrorMsg": "Kullanılabilir katman yok",
    "layerNotSupportedErrorMsg": "Desteklenmiyor ",
    "noFieldSelected": "Düzenleme işlemini kullanarak analiz alanlarını seçin.",
    "duplicateFieldsLabels": "Şunun için yinelenen \"${labelText}\" etiketi eklendi: \"${itemNames}\"",
    "noLayerSelected": "Analiz için en az bir alan seçin",
    "errorInSelectingLayer": "Katman seçme işlemi tamamlanamıyor. Yeniden deneyin.",
    "errorInMaxFeatureCount": "Analiz için geçerli bir detay sayısı üst sınır değeri girin."
  }
});