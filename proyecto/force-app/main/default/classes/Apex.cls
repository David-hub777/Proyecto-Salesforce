public with sharing class Apex {
    public Apex() {

    }
    @AuraEnabled
    public static Void insertCadena(String cadena) {
        Account account = new Account(Name=cadena);
        insert account;
    }

    @AuraEnabled
    public static List<String> getListCadenas(){
        List<String> cadenas = new List<String>();

        try {
            Account[] accounts = [SELECT Name FROM Account];
            for (Account secuencia : accounts) {
                cadenas.add(secuencia.Name);
            }
            return cadenas;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}