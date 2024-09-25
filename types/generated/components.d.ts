import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'Markdown';
          preset: 'rich';
        }
      >;
  };
}

export interface BrandCompany extends Schema.Component {
  collectionName: 'components_brand_companies';
  info: {
    displayName: 'company';
    description: '';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    num: Attribute.String;
  };
}

export interface AboutSection1 extends Schema.Component {
  collectionName: 'components_about_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    vertical_layout: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo': SeoSeo;
      'faq.faq': FaqFaq;
      'brand.company': BrandCompany;
      'about.section-1': AboutSection1;
    }
  }
}
